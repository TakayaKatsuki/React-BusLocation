import Layout from '../components/Layout'
import MapControlTab from '../components/MapControlTab'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100vh; */
`
const IndexMain = styled.main`
  /* flex: 1;
  position: relative; */
`
const IndexDiv = styled.div`
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; */
`


const IndexPage = () => (
  <IndexWrapper>
    <Layout title='のっティバスどこ'>
      <IndexMain>
        <IndexDiv>
          <MapControlTab />
        </IndexDiv>
      </IndexMain>
    </Layout>
  </IndexWrapper>
)

export default IndexPage
