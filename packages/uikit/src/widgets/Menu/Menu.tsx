import { useIsMounted } from "@pancakeswap/hooks";
import { AtomBox } from "@pancakeswap/ui/components/AtomBox";
import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import CakePrice from "../../components/CakePrice/CakePrice";
import Footer from "../../components/Footer";
import LangSelector from "../../components/LangSelector/LangSelector";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../contexts";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { MenuContext } from "./context";
import { NavProps } from "./types";

const Wrapper = styled.div`
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number; showMenuBottom: boolean }>`
  position: fixed;
  background-color: black;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  border-bottom: ${({showMenuBottom}) => (showMenuBottom? 'solid thin #e5e7eb' : 'none')};
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
  // max-width: 576px;
  width: 100%;
`;

const Inner = styled.div`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  // max-width: 576px;
  width: 100% !important;
`;

const Menu: React.FC<React.PropsWithChildren<NavProps>> = ({
  linkComponent = "a",
  banner,
  rightSide,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  buyCakeLink,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const isMounted = useIsMounted();
  const [showMenu, setShowMenu] = useState(true);
  const [showMenuBottom, setShowMenuBottom] = useState(false);
  const refPrevOffset = useRef(typeof window === "undefined" ? 0 : window.pageYOffset);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  // const totalTopMenuHeight = isMounted && banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;
  const totalTopMenuHeight = isMounted && MENU_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // // Always show the menu when user reach the top
      // if (isTopOfPage) {
      //   setShowMenu(true);
      // }
      // // Avoid triggering anything at the bottom because of layout shift
      // else if (!isBottomOfPage) {
      //   if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
      //     // Has scroll up
      //     setShowMenu(true);
      //   } else {
      //     // Has scroll down
      //     setShowMenu(false);
      //   }
      // }
      // refPrevOffset.current = currentOffset;

      if (isTopOfPage) {
        setShowMenuBottom(false);
      }
      else {
        setShowMenuBottom(true);
      }
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);
  const providerValue = useMemo(() => ({ linkComponent }), [linkComponent]);
  return (
    <MenuContext.Provider value={providerValue}>
      <AtomBox
        asChild
        minHeight={{
          xs: "auto",
          md: "100vh",
        }}
      >
        <Wrapper>
          <div style={{position:"fixed", opacity:"0.5", inset:"0", backgroundImage:"linear-gradient(to bottom, #000, rgb(225, 102, 162)"}} />
          <FixedContainer showMenu={showMenu} height={totalTopMenuHeight} showMenuBottom={showMenuBottom}>
            {/* {banner && isMounted && <TopBannerContainer height={topBannerHeight}>{banner}</TopBannerContainer>} */}
            <StyledNav>
              <Flex>
                <Logo href={homeLink?.href ?? "/"} />
              </Flex>
              <Flex alignItems="center" height="100%" style={{ marginTop: '28px', marginRight: '30px' }}>
                <AtomBox display={{ xs: "none", md: "block" }}>
                  {/* <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="24px" /> */}
                  {/* <Flex justifyContent="space-around" overflow="hidden"> */}
                  <SubMenuItems
                    items={subLinksWithoutMobile}
                    mt={`${totalTopMenuHeight + 1}px`}
                    activeItem={activeSubItem}
                    style={{ margin: 0 }}
                  />

                  {subLinksMobileOnly && subLinksMobileOnly?.length > 0 && (
                    <SubMenuItems
                      items={subLinksMobileOnly}
                      mt={`${totalTopMenuHeight + 1}px`}
                      activeItem={activeSubItem}
                      isMobileOnly
                    />
                  )}
                  {/* </Flex> */}
                </AtomBox>
                {/* <AtomBox mr="12px" display={{ xs: "none", lg: "block" }}>
                  <CakePrice showSkeleton={false} cakePriceUsd={cakePriceUsd} />
                </AtomBox> */}
                {/* <Box mt="4px">
                  <LangSelector
                    currentLang={currentLang}
                    langs={langs}
                    setLang={setLang}
                    buttonScale="xs"
                    color="textSubtle"
                    hideLanguage
                  />
                </Box> */}
                {rightSide}
              </Flex>
            </StyledNav>
          </FixedContainer>
          {/* {subLinks ? (
            <Flex justifyContent="space-around" overflow="hidden">
              <SubMenuItems
                items={subLinksWithoutMobile}
                mt={`${totalTopMenuHeight + 1}px`}
                activeItem={activeSubItem}
              />

              {subLinksMobileOnly && subLinksMobileOnly?.length > 0 && (
                <SubMenuItems
                  items={subLinksMobileOnly}
                  mt={`${totalTopMenuHeight + 1}px`}
                  activeItem={activeSubItem}
                  isMobileOnly
                />
              )}
            </Flex>
          ) : (
            <div />
          )} */}
          <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}>
            <Inner>{children}</Inner>
          </BodyWrapper>
        </Wrapper>
      </AtomBox>
      {/* <Footer
        items={footerLinks}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        cakePriceUsd={cakePriceUsd}
        buyCakeLabel={buyCakeLabel}
        buyCakeLink={buyCakeLink}
        mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
      /> */}
      {/* <AtomBox display={{ xs: "block", md: "none" }}>
        <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />
      </AtomBox> */}
    </MenuContext.Provider>
  );
};

export default Menu;
