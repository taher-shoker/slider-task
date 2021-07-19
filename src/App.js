import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global-style'
import SliderContainer from './components/slider-section';

import theme from './styles/theme'
const App=()=> {
  const sliders = [
    {id:1,title:'title one',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:2,title:'title two',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:3,title:'title three',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:4,title:'title four',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:5,title:'title five',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:6,title:'title four',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120},
    {id:7,title:'title five',src:'https://www.archerply.com/images/hm-prod/platinum-ply4.png',description:'test, test',date: 'July 18 2120',user:'Taher shoker',numVotes:120}
  ]
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <SliderContainer sliders={sliders}/>
    </ThemeProvider>
    </> 
  );
}

export default App;
