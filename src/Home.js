import React from 'react';

const Home = () => {
  return (
    <>
    <div className="cards">
      <Card
        imgsrc={Sdata[0].imgsrc}
        title ={Sdata[0].title}
        Sname ={Sdata[0].Sname}
        Slink = {Sdata[0].Slink}

      />
      <Card
      imgsrc={Sdata[1].imgsrc}
      title ={Sdata[1].title}
      Sname ={Sdata[1].Sname}
      Slink = {Sdata[1].Slink}

      />
      <Card
      imgsrc={Sdata[2].imgsrc}
      title ={Sdata[2].title}
      Sname ={Sdata[2].Sname}
      Slink ={Sdata[2].Slink}

      />
      <Card
      imgsrc={Sdata[3].imgsrc}
      title ={Sdata[3].title}
      Sname ={Sdata[3].Sname}
      Slink ={Sdata[3].Slink}
      />

      <Card
      imgsrc={Sdata[4].imgsrc}
      title ={Sdata[4].title}
      Sname ={Sdata[4].Sname}
      Slink ={Sdata[4].Slink}

      />
    </div>
    
    </>
  )
};

export default Home;
