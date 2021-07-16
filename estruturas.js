//ESTRUTURA PARA OBJETO DE USUÁRIOS

const usuario = {
  "name": "String do nome completo",  //Nome completo auto declarado
  "id": new Date().toISOString(),     //Id gerado por hora de cadastro + alguma coisa a definir talvez e-mail ou data de nascimento
  "data de nascimento": "03/12/1980", //Dia, mês e ano
  "bio": "String da biografia do usuário", //Biografia do usuário
  "foto_bio": "Link da foto principal",  //Pode vir de outra rede social
  "e-mail": "email de cadastro", //Pode vir direto quando feito cadastro por outra rede social
  "friends": [],  //Lista de amigos conectados
  "community": [],  //Lista de comunidades da qual participa
  "facebook": "String do usuário do Facebook ou NULL",    //Apenas nome de usuário
  "instagram": "String do usuário do Instagram ou NULL",  //Apenas nome de usuário
  "linkedinn": "String do usuário do linkedinn ou NULL",  //Apenas nome de usuário
  "github": "String do usuário do github ou NULL",        //Apenas nome de usuário
  "recados": 0,   //Inicialização padrão
  "fotos": 0,     //Inicialização padrão
  "videos": 0,    //Inicialização padrão
  "fãs": 0,       //Inicialização padrão
  "mensagens": 0, //Inicialização padrão
  "confiavel": 0, //Inicialização padrão
  "legal": 0,     //Inicialização padrão
  "sexy": 0,      //Inicialização padrão
  "depoimentos": []   //Array de strings
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs/{org}",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}


//ESTRUTURA PARA OBJETO DE COMUNIDADES:
  comunidade = {
  url: "Endereço auto gerado da comunidade",
  id: "Número únido de identificação (data de criação)",
  title: dadosForm.get(`title`),
  "descrição": dadosForm.get(`descricao`),//Descrição da comunidade
  image: dadosForm.get(`image`),  
  idioma: dadosForm.get(`idioma`),
  categoria: dadosForm.get(`categoria`),
  date: new Date(),
  administrador: usuarioAleatorio,
  moderadores: [],
  membros: [],
  "numero de membros": 1,
  foruns: [],
}

//ESTRUTURA PARA CRIAÇÃO DE COMUNIDADES:
const comunidade = {
  url: dadosForm.get(`url`),
  id: new Date().toISOString(),
  title: dadosForm.get(`title`),
  "descrição": dadosForm.get(`descricao`),//Descrição da comunidade
  image: dadosForm.get(`image`),  
  idioma: dadosForm.get(`idioma`),
  categoria: dadosForm.get(`categoria`),
  date: new Date(),
  administrador: usuarioAleatorio,
  moderadores: [],
  membros: [],
  "numero de membros": 1,
  foruns: [],
}

const comunidade = {
  url: dadosForm.get(`url`),
  id: new Date().toISOString(),
  title: dadosForm.get(`title`),
  image: dadosForm.get(`image`),                
}

