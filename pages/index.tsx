import Layout from '../components/Layout'
import Map from '../components/Map'
import MapControlTab from '../components/MapControlTab'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout title='のっティバスどこ'>
    <MapControlTab />
  </Layout>
)

export default IndexPage
