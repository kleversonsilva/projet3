

document.onreadystatechange = function ( ) {
    if ( document.readyState == " completo ") {
        
        pega_estado();
        document.querySelector('#dados').mudar=mostrar_cidades;   
        
        documentt.getElementById ( "clique").addEventListener ( "clique", mostra_micro );

    }
}


function  pegar_estado(){
    
    var  httpRequest=new  XMLHttpRequest();

    httpRequest . onreadystatechange  = function() {
        if ( httpRequest . readyState  ===  4 ) {
            if ( httpRequest . status  ===  200 ) {
                resposta  =  JSON . parse ( httpRequest.responseText);


                var  lista  =  documento . querySelector ( '#dados' );
                lista . innerHTML  =  "" ;

                resposta . forEach ( função  ( el ){
                opção  =  documento . createElement ("opção")       
                opção . innerHTML  =   el . nome;
                opção . valor  =  ele . sigla;
                opção . setAttribute ( ' nome ', JSON.stringify ( el.nome ))
                lista . appendChild ( opção );
             } )           
        }
    }
}

    httpRequest . open ( 'GET' ,  'https://servicodados.ibge.gov.br/api/v1/localidades/estados' ) ;
    httpRequest . enviar ( ) ;
}   



function  mostrar_cidades() {
    sigla_estados  =  (document.querySelector ('#dados') . value )

    var  httpRequest  =  new  XMLHttpRequest ( ) ;

    httpRequest . onreadystatechange  =  function ( ) {
        
        if ( httpRequest . readyState===4 ) {
            if (httpRequest.status===200 ){
                resposta  = JSON . parse(httpRequest.responseText)               
                
                var  lista = documento . querySelector ( 'cidade') ;
                lista . innerHTML  =  " ";
                resposta . forEach (função(ell){
                opção  =  documento . createElement ("opção")      
                option.innerHTML  =   el.nome
                option.setAttribute ('nome',  JSON.stringify (ell.nome))
                lista.appendChild(option)


            } )
        }
    }
}

    httpRequest . open ( 'GET' ,  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + sigla_estados + '/municipios')
    httpRequest . enviar ( ) ;


}




function  mostrar_micro ( ){
    sigla_estados  =  (document . querySelector ('dados').value )

    var  httpRequest  =  new  XMLHttpRequest ( ) ;

    httpRequest . onreadystatechange  =  function ( ) {
        if ( httpRequest . readyState  ===  4 ) {
            if (httpRequest . status  === 200){
               
                
                resposta = JSON . parse ( httpRequest . responseText ) ;               
                resposta.forEach (função(ell))


        }
    }
    }
}
 httpRequest . open ('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+sigla_estados+'/municipios') ;
    httpRequest.enviar();