import { useTranslation } from "@pancakeswap/localization";
import { Text } from "../../../../../components/Text";
import { Button } from "../../../../../components/Button";
import { StyledActionContainer, ActionContent, ActionTitles } from "./styles";

interface EnableStakeActionProps {
  pendingTx: boolean;
  handleApprove: () => void;
}

const EnableStakeAction: React.FunctionComponent<React.PropsWithChildren<EnableStakeActionProps>> = ({
  pendingTx,
  handleApprove,
}) => {
  const { t } = useTranslation();

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
