import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public projectInfo = [];
  projectName: string;
  private sub: any;
  showLink:boolean;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectName = params['projectName'];
      this.showLink=this.projectName=="BatailleNavale"||this.projectName=="1530"?true:false;
      if (this.projectName === "EuroPLV") {
        //EuroPLV
        this.projectInfo.push(
          {
            name: "EuroPLV",
            resume: [`Ce projet fut réalisé dans le cadre de mon stage de 1er année de BTS, le but de ce projet était de créer une application web permettant de réaliser une gestion de personnel. Cette application devait permettre d'ajouter, modifier, supprimer des utilisateurs, modifier la composition des groupes de travail , effectuer des recherches sur des utilisateurs et les différents groupes.`,],
            year: "2018",
            type: "HTML / CSS / Angular 5 ",
            img: [
              "../../assets/ressources/europlv/accueil.PNG","../../assets/ressources/europlv/ajoutNormal.PNG",
              "../../assets/ressources/europlv/caracUserInit.PNG","../../assets/ressources/europlv/caracUserInit2.PNG",
              "../../assets/ressources/europlv/caracUserModifPhotoValidate.PNG","../../assets/ressources/europlv/editGroupeAddUser2.PNG",
              "../../assets/ressources/europlv/editGroupeInit.PNG","../../assets/ressources/europlv/edituserDelete.PNG",
              "../../assets/ressources/europlv/modifUserInit.PNG","../../assets/ressources/europlv/rechercheUserGroupe.PNG",
            ],
            video:[],
          }
          );
        } else if (this.projectName === "1530") {
          //1530
          this.projectInfo.push(
            {
              name: "Son'Art",
              resume: [`Ce projet est une refonte d'un site pour une association du BDE de Centrale Lyon. `,
              ` Le but de ce site est de renseigner les étudiants de Centrale sur les derniers bons plans culturels de Lyon (cinéma, opéra, musique ...), et de permettre aux membres de l'association d'ajouter/modifier/supprimer des articles et de gérer les images, textes de la page d'accueil . `,
            ],
            year: "2018",
            type: "HTML / CSS / PHP",
            img: [
              "../../assets/ressources/1530/Home.png", "../../assets/ressources/1530/Article.png","../../assets/ressources/1530/ArticleDetails.png","../../assets/ressources/1530/PassCulture.png",
              "../../assets/ressources/1530/PanelAdmin.png","../../assets/ressources/1530/NewArticle.png","../../assets/ressources/1530/Edit.png",
              "../../assets/ressources/1530/Carousel.png",
            ],
            video:[],
            lien:'https://le1530.eclair.ec-lyon.fr',
          }
          );
        } else if (this.projectName === "BatailleNavale") {
          //Bataille Navale
          this.projectInfo.push(
            {
              name: "Bataille Navale",
              resume: [`Ce projet a été réalisé dans le cadre d'un projet scolaire, le but était de réaliser un jeu de bataille navale en Java. Il peut se jouer contre un bot ou entre deux joueurs, vous pouvez personnaliser la taille du plateau, placez vos bateaux. 
              `,`Lorsqu'un de vos coups touche un bateau ennemi votre case devient verte et émet un son, si un bateau est coulé l'ensemble de ses cases devient bleu, si votre coup ne touche rien la case devient rouge. Le premier des joueurs qui détruit l'ensemble des bateaux de l'adversaire remporte la partie. `],
              year: "2017",
              type: "Java",
              img: [
                "../../assets/ressources/batailleNavale/bataille1.png",
                "../../assets/ressources/batailleNavale/bataille2.png",
                "../../assets/ressources/batailleNavale/bataille3.png",
                "../../assets/ressources/batailleNavale/bataille4.png",
              ],
              video:[],
              lien:'../../assets/ressources/batailleNavale/BatailleNavale.jar'
            }
            );
          }
          else if (this.projectName === "Clothing") {
            //Clothing Brand
            this.projectInfo.push(
              {
                name: "VOAR Clothing",
                resume: [`
                Ce projet est un projet personnel, il avait pour but de simuler un site de vente de vêtements.
                Ce site permet à l'utilisateur de voir l'ensemble des produits proposés (T-shirt, Sweat), de les trier par prix, dates de sorties. Et d'ajouter à son panier les éléments de son choix (taille,quantité).
                
                
                
                `],
                year: "2018",
                type: " PHP",
                img: [
                  "../../assets/ressources/clothing/ClothingHome.jpeg", "../../assets/ressources/clothing/tshirt.jpeg", "../../assets/ressources/clothing/details.jpeg",
                  "../../assets/ressources/clothing/basketShop.jpeg"
                ],
                video:[],
              }
              );
            }
            else if (this.projectName === "Tut") {
              this.projectInfo.push(
                {
                  name: "Projet Tutoré",
                  resume: [ `Ce projet a été réalisé dans le cadre d'un projet scolaire, le but était de pouvoir scanner à l'aider d'une
                  Raspberry Pi  et d'une caméra des codes-barres de produits et de les enregistrer par la suite dans une base de données.
                  Puis par la suite le but était de créer un site web permettant de se connecter et ainsi de récupérer et d'afficher toutes les informations correspondant à l'utilisateur.
                  `],
                  year: "2017",
                  type: "HTML / CSS / Node js",
                  img: [
                    
                  ],
                  video:[
                    "../../assets/ressources/tuts2/tutS2.mp4",
                  ]
                }
                );
              }
              else if (this.projectName === "Meteo") {
                //Meteo
                this.projectInfo.push(
                  {
                    name: "Meteo app",
                    resume: [`Réalisation d'une application mobile hybride.`,
                    `Cette application fonctionne avec l'api d'OpenWeather ,elle permet à un utilisateur d'entrer le nom d'une ville et d'avoir sa météo en temps direct,
                    l'utilisateur peut aussi avoir les prévisions météorologiques du jour suivant.`
                  ],
                  year: "2017",
                  type: "HTML / CSS / Javascript",
                  img: [
                    "../../assets/ressources/meteo/meteo1.jpeg","../../assets/ressources/meteo/meteo2.jpeg",
                    
                    
                  ],
                  video:[],
                }
                );
              }
            });
          
          }
          
          
          
          
          
        }
        