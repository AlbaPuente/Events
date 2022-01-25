window.onload = function() {
    addContent();
    loopP();
    clase();
    listApps();
    remove();
    insertText();
  }

  function addContent (){
    let addDiv = document.createElement('div');
    let addP= document.createElement('p');
    let pText= document.createTextNode('Soy dinámico!');
    addP.appendChild(pText);
    addDiv.appendChild(addP);

  }

  function loopP(){
      let addDiv= document.createElement('div');
      for(i=0; i<6; i++){
          let addP= document.createElement('p');
          addDiv.appendChild(addP);
      }
  }


    const CLASSFN= document.querySelector('.fn-insert-here');
    function clase(){
        let hText= document.createTextNode('Wubba Lubba dub dub');
        CLASSFN.appendChild(hText);
    }

    const BODY= document.querySelector('body');
    function listApps(){
        let apps= ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
        let uL= document.createElement('ul');
    
        for(i=0;i<apps.length;i++){
            let lI= document.createElement('lI');
            let info= document.createTextNode(apps[i]);
            lI.appendChild(info);
            uL.appendChild(lI);
            
        }
        BODY.appendChild(uL);
    }

    const pClass= document.querySelectorAll('.fn-remove-me');
    console.log('Esto es pClass', pClass);
        function remove(){
            for(i=0;i<pClass.length;i++){
            pClass[i].parentNode.removeChild(pClass[i]);
            }
           
        }
    
    const textDiv= document.querySelectorAll('div.fn-insert-here');
    console.log(textDiv);
    function insertText(){
        for(i=0;i<textDiv.length;i++){
            let createText= document.createTextNode('Voy dentro!');
            textDiv[i].appendChild(createText);
        }
    }

  

