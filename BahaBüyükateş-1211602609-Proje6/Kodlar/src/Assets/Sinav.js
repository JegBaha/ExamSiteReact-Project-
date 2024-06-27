import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Space, theme } from 'antd';
import { Button } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import RadioButtonThing from './RadioButtonThing';
import SinavNavbar from './SinavNavbar';



const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const { Header, Content, Footer } = Layout;
const number=0;
const items = new Array(8).fill(null).map((_, index) => ({
  key: index + 1,
  
  label: `Soru ${index + 1}`,
}));
const Sinav = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

	const questions = [
		{
			questionText: 'Danimarka nın başkenti nedir?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Londra', isCorrect: false },
				{ answerText: 'Kopenhag', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Tesla nın CEO su kimdir?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'iPhone hangi şirket tarafından oluşturuldu?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Sabit değerler için hangi tanımlayıcı ifade kullanılır?',
			answerOptions: [
				{ answerText: 'div', isCorrect: false },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'var', isCorrect: false },
				{ answerText: 'const', isCorrect: true },
			],
		},
    {
			questionText: 'C dilini bulan kimdir?',
			answerOptions: [
				{ answerText: 'aydın Carus', isCorrect: false },
				{ answerText: 'Linus Torvalds', isCorrect: false },
				{ answerText: 'Mark Zuckerberg', isCorrect: false },
				{ answerText: 'Dennis Ritchie', isCorrect: true },
			],
		},
    {
			questionText: 'Euro2024 te Türkiyenin ilk karşılaştığı takım?',
			answerOptions: [
				{ answerText: 'Portekiz', isCorrect: false },
				{ answerText: 'Çekya', isCorrect: false },
				{ answerText: 'Avusturya', isCorrect: false },
				{ answerText: 'Gürcistan', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [failscore, setFailScore] = useState(0);
  const [sinavsentBool, setSinavSentThing] = useState(true);
  const [sinavsentSecondBool, setSinavSentSecondThing] = useState(true);
  const [dersNotu,setDersNotu]=useState(0);
  const[seconds,setSeconds]=useState(45);
  const[minutes,setMinutes]=useState(0);


var timerThing;
useEffect(()=>{
	timerThing=setInterval(()=>{
		setSeconds(seconds-1);
		if(seconds<=0){
			setMinutes(minutes-1);
			setSeconds(0);
		}
		if(minutes+1 && seconds<=0){
			setSinavSentThing(false)
		}
	},1000)
	return()=>clearInterval(timerThing);
})
//Propslara veri aktarma

  useEffect(()=>{
    props.dersNotuData(dersNotu)
},[dersNotu])
  useEffect(()=>{
    props.sinavBool(sinavsentBool)
},[sinavsentBool])
useEffect(()=>{
  props.sinavFinishThing(sinavsentSecondBool)
},[sinavsentSecondBool])
//******************* */

	const handleAnswerOptionClick = (isCorrect) => {
	
		if (isCorrect) 
			setScore(score + 1);
		else{
			setFailScore(failscore+1);
			{failscore>=3&&(setScore(score-1))&&(setFailScore(0))} 
			{score<=0&&(setScore(0))}
		}
			

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
		
			setShowScore(true);
		}
	};

  const sinavSenThing=()=>{
	
      setSinavSentThing(false)

      setDersNotu(score);

  }

  return (
    <Layout>
      <SinavNavbar></SinavNavbar>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
          <Breadcrumb.Item>Ders</Breadcrumb.Item>
          <Breadcrumb.Item>Sınav</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {number==0&&  <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
   
    <Space direction='vertical' >
		<div className='app'>
			{showScore ? (
				
				<Space direction='Vertical'>
					Toplam Doğru: "{score}" Toplam Soru: "{questions.length}" Toplam Yanlış: "{failscore}"
          
          <Button  onClick={sinavSenThing}>
              Bitir 
          </Button>
        </Space>
			) : (
				<>
        <Space direction='vertical'>
					<Space direction='vertical' size={"small"}>
          <p>Question {currentQuestion + 1}/{questions.length}</p>
					{questions[currentQuestion].questionText}
					</Space>
          
					<Space >
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button type="primary" size='medium' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
						 	 
					</Space>
					<h1>Zaman</h1>
						 <h2>{minutes}:{seconds}</h2>	
          </Space>

				</>
			)}
		</div>

    </Space>
    
    </Checkbox.Group>}
         
         </div>
 
       </Content>
 
       <Footer
         style={{
           textAlign: 'center',
         }}
       >
         Ant Design ©{new Date().getFullYear()} Created by Ant UED
       </Footer>
    </Layout>
  );
};
export default Sinav;