import Layout from '../components/Layout'
import MapControlTab from '../components/MapControlTab'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`

const IndexPage = () => (
  <IndexWrapper>
    <Layout title='のっティバスどこ'>
      <MapControlTab />
    </Layout>
  </IndexWrapper>
)

export default IndexPage
