import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos:any[]=[];	
  productos_filtrados:any[]=[];  
	cargando_productos:boolean=true;

  constructor(private http:Http) {
  		this.cargar_productos();
   }

   public cargar_productos(){
   	this.cargando_productos= true;
     let promesa = new Promise((resolve, reject)=>{

         	this.http.get('https://servivio.json')
         	.subscribe( res => {
         		console.log(res.json());
         		setTimeout(()=>{
         			this.cargando_productos= false;
         			this.productos = res.json();
              resolve();

         		},1000);
         		

         	});
      });

     return promesa;
   }

   public cargar_producto(cod:string){
   		return this.http.get(`{{servicio}}/productos/${cod}.json`)
   }


   public buscar_producto(termino:string){

     if(this.productos.length===0){
       this.cargar_productos().then(()=>{
          this.filtrar_productos(termino);
       });
     }else{
         this.filtrar_productos(termino);
     }
       this.productos.forEach(prod=>{
         console.log(prod);
       })
   }

   private filtrar_productos(termino:string){
       this.productos_filtrados=[];
       termino = termino.toLowerCase();
       this.productos.forEach( prod =>{
         console.log(termino);
         if(prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
           this.productos_filtrados.push(prod)
         }
         console.log(prod)
       })
   }

}
