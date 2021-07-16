import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

  if (request.method === 'POST') {
    const TOKEN = '91305a2a075f14722497a66439bc99';
    const client = new SiteClient(TOKEN);
  
    //Validar os dados antes de sair cadastrando
    const registroCriado = await client.itens.create({
      itemType: "968428", //ID do model de "Comunidades" criado pelo Dato
      ...request.body,
      //title: "Comunidade de Teste",
      //imageUrl: "https://github.com/omariosouto.png",
      //creatorSlug: "dirceug"
    })  
    
    console.log(registroCriado);
  
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: `Ainda não temos nada com o GET, mas no POST tem`
  })
}