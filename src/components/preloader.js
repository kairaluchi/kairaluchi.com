import styled from 'styled-components'
import preloader from '../images/icons/preloader.gif'

const PreLoader = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #ffffff;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${preloader});
`

export default PreLoader
