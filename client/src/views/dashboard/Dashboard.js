import React from 'react'

import {
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CCardBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardFooter,
  CProgress,
  CCard,
  CCarousel,
  CCarouselItem,
  CImage,
} from '@coreui/react'

import MainImg from 'src/assets/images/main.png'
import Main2Img from 'src/assets/images/main2.png'
import Main3Img from 'src/assets/images/main3.png'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={MainImg} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Main2Img} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Main3Img} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      {/* <CCard className="mb-4">
        <CRow>
          <CCol xs={6}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>학회위원회 공지</strong>
              </CCardHeader>
              <CCardBody>
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">번호</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="center">
                        제목
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="right">
                        날짜
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={6}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>학회 공지</strong>
              </CCardHeader>
              <CCardBody>
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">번호</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="center">
                        제목
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="right">
                        날짜
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell className="center">title</CTableDataCell>
                      <CTableDataCell className="right">22/5/16</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCard> */}
    </>
  )
}

export default Dashboard
