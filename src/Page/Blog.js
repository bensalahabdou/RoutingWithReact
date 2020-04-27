import React from 'react';

import ArticleForm from '../components/ArticleForm';

// const articles =[{title:"Développeur web : quelles compétences pour exercer le métier ?", date:"19/4/2019",smallDescription:"Le métier de développeur web est en plein essor, vous êtes de plus en plus nombreux à vous tourner vers cette profession et vous avez bien raison : ce profil est actuellement très recherché dans les entreprises Mais pour décrocher le job idéal  encore faut-il avoir les bonnes compétences  La technicité du développement web demande des connaissances variées en langage de programmation et une adaptation constante à leurs évolutions",Img :"https://www.codeur.com/blog/wp-content/uploads/2018/12/codeur-developpeur-web-700x525.jpg", id:"1"},
//   {title:"VOITURES AUTONOMES : D’ABORD DANS LE PARKING", date:"19/06/2019",smallDescription:"La voiture autonome trouve progressivement sa place dans notre quotidien. Si la voiture complètement sans conducteur a encore un très long chemin à parcourir avant de pouvoir circuler n’importe où, n’importe quand, un nouveau pas vient d’être franchi vers le niveau quatre d’automatisation, sur une échelle de cinq. Un niveau où le véhicule est capable de prendre les commandes sans aucune intervention humaine mais sur des zones bien définies. La première d’entre elles a recevoir l’aval des autorités publiques se trouve à Stuttgart, en Allemagne. Il s’agit du parking du musée Mercedes-Benz, équipé d’infrastructures adaptées pour guider les voitures autonomes jusqu’à une place de stationnement.",Img:"https://www.automobile-propre.com/wp-content/uploads/2010/07/004.jpg", id:"2"},
//   {title:"Système électrique", date:"08/07/2019",smallDescription:"Le système électrique désigne l’ensemble des activités liées à l’industrie électrique : la production d’électricité, son transport, sa distribution, et sa fourniture. En France et en Europe, les systèmes électriques se transforment. L’impératif climatique, la libéralisation des marchés de l’électricité, l’avènement du numérique et le développement des énergies renouvelables entraînent des mutations profondes dans le fonctionnement des systèmes électriques. A travers des notes de conjoncture, des notes pédagogiques et des données publiques, l’OIE permet à chacun de mieux comprendre les systèmes électriques d’aujourd’hui et les enjeux de leurs mutations.",Img:"https://belle-isle.eu/wp-content/uploads/sites/3/2009/02/installation-electrique-1.gif" , id:"3"},
//   {title:"Principe de fonctionnement d'un chauffe-eau", date:"19/07/2019",smallDescription:"Le chauffe-eau électrique à accumulation (appelé également ballon d'eau chaude ou cumulus électrique) est l'une des solutions des plus confortables, économiques et simple d'utilisation en termes de production d'eau chaude pour une habitation. Le chauffe-eau est considéré comme un élément centralisé pour la production d'eau chaude nécessaire à une maison, un appartement, des bureaux, un commerce … Grâce à la taille importante de son réservoir, le chauffe-eau électrique à accumulation permet un débit élevé et constant en eau-chaude. Grâce à ce réservoir, il est possible de tirer de l'eau de divers points de puisage simultanément sans problème d'eau chaude. Le réservoir du chauffe-eau électrique à accumulation peut permettre d'avoir de larges quantités d'eau chaude à disposition, selon la capacité de la cuve. Le confort est donc l'avantage essentiel du chauffe-eau à accumulation.",Img: "https://docplayer.fr/docs-images/22/1454053/images/3-0.png", id:"4"}
//  ]

const Blog = ({articles}) => {
    return (
    <div>
        <h1>My Articles</h1>
        {articles.map(article => (<div key={article.id}><ArticleForm title={article.title} date={article.date} id={article.id}/></div>))}


    </div>
    );
}



export default Blog;