import { gql } from 'graphql-request'

const pairHourDatasByIds = gql`
  query pairHourDatasByIds($pairIds: [ID!]) {
    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {
  }
`
export default pairHourDatasByIds
