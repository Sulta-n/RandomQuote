const { useState } = React;

const quotes = [
  {text:'You do not have to be good. You do not have to walk on your knees for a hundred miles through the desert repenting. You only have to let the soft animal of your body love what it loves.',
  author:'Mary Oliver'},
  {
    text:"If one day the moon calls you by your name don't be surprised, because every night I tell her about you.",
    author:'Shahrazad al-Khalij'
  },
  {text:"It's you. It's me. It's us",
    author:'The Haunting of Bly Manor',
  },
  {text:'I would rather share one lifetime with you than face all the ages of this world alone',
    author:'J.R.R. Tolkien',
  },
  {text:'For small creatures such as we, the vastness is bearable only through love.',
    author:'Carl Sagan',
  },
  {text:'Love is the longing for the half of ourselves we have lost.',
    author:'Milan Kundera',
  },
];

const getQuotes = ()=>{
  const randomIndex= Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
const getColors = () =>{
  const letters = '123456789ABCDEF';
  let color ='#';
  for(let i=0;i<6;i++){
    color+= letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const QouteMachine = ()=>{

 const[quote,setQoute] = useState(getQuotes());
 const[color,setColor] = useState(getColors());
 
 const handleClick =()=>{
  setQoute(getQuotes());
  setColor(getColors());
 }
 React.useEffect(()=>{
  document.body.style.backgroundColor = color;
 },[color]);

  return(
    <div id='quote-box'>
      <h3 id='text' style={{color}}>{quote.text}</h3>
      <p id='author'>{quote.author}</p>
      <div id='buttons'>
        <button id='new-quote' onClick={handleClick} className='btn ' style={{backgroundColor:color}}>New Quote</button>
        <a id='tweet-quote' className='btn' style={{backgroundColor:color}} target='_blank' href='twitter.com/intent/tweet'><i class="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  )
}

ReactDOM.render(<QouteMachine/>,document.getElementById('root'));