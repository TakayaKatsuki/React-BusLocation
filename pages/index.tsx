import Layout from '../components/Layout'
import Map from '../components/Map'
import MapControlTab from '../components/MapControlTab'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout title='のっティバスどこ'>
    <div className='flex-column'>
      <main className='main-view__row main-view__row--expanded'>
        <div className='main-view__row-content'>
          <MapControlTab />
          <Map />
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
