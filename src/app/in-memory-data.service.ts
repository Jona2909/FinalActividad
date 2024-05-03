import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Casablanca (1942)', descripcion: 'Esta película dirigida por Michael Curtiz es un drama romántico ambientado en la Segunda Guerra Mundial. Protagonizada por Humphrey Bogart e Ingrid Bergman, sigue la historia de amor entre un dueño de un café en Casablanca y una mujer que busca escapar del régimen nazi.', imagen :'assets/casablanca.jpeg'},
      { id: 2, name: 'El Padrino (1972)', descripcion: 'Dirigida por Francis Ford Coppola, esta película es un clásico del cine de mafiosos. Basada en la novela de Mario Puzo, sigue la historia de la familia Corleone y su ascenso al poder en el mundo del crimen organizado en Nueva York.' , imagen :'assets/elpadrino.jpeg'},
      { id: 3, name: 'Cantando bajo la lluvia (1952)', descripcion: 'Este musical dirigido por Stanley Donen y Gene Kelly es una celebración del cine mudo y la transición al cine sonoro. Protagonizada por Gene Kelly, Debbie Reynolds y Donald O"Connor, sigue la historia de un ídolo del cine mudo que lucha por adaptarse al nuevo medio' , imagen :'assets/cantandobajolalluvia.png'},
      { id: 4, name: 'Cinema Paradiso (1988)', descripcion: 'Dirigida por Giuseppe Tornatore, esta película italiana es un emotivo homenaje al cine y a la infancia. Narra la historia de un niño en Sicilia que desarrolla una profunda relación con el proyeccionista del cine local y cómo este la influencia en su vida adulta.', imagen :'assets/cinema.jpeg' },
      { id: 5, name: 'Ciudadano Kane (1941)', descripcion: ' Dirigida y protagonizada por Orson Welles, esta película es considerada una obra maestra del cine. Narra la vida del magnate de los medios de comunicación Charles Foster Kane, explorando su ascenso al poder y su caída en desgracia.' , imagen :'assets/ciudadanocade.jpeg'},
      { id: 6, name: 'Lo que el viento se llevó (1939)', descripcion: 'Dirigida por Victor Fleming, esta película épica es un drama romántico ambientado en el sur de Estados Unidos durante la Guerra Civil. Basada en la novela de Margaret Mitchell, sigue la vida de Scarlett O"Hara mientras lucha por sobrevivir y encontrar el amor en tiempos turbulentos.' , imagen :'assets/loqueelvientosellevo.jpg'},
      { id: 7, name: 'Psicosis (1960)', descripcion: 'Dirigida por Alfred Hitchcock, esta película de terror psicológico es un clásico del género. Con una famosa escena de la ducha, narra la historia de una secretaria que se encuentra en un motel dirigido por un misterioso y perturbador propietario.', imagen :'assets/psicosis.jpeg' },
      { id: 8, name: 'Tiempos modernos (1936)', descripcion: 'Dirigida y protagonizada por Charlie Chaplin, esta película es una sátira social sobre la era industrial y la deshumanización del trabajo. Chaplin interpreta a un trabajador de una fábrica que lucha por sobrevivir en un mundo cada vez más mecanizado.', imagen :'assets/tiemposmodernos.jpeg'},
      { id: 9, name: 'El Mago de Oz (1939)', descripcion: 'Dirigida por Victor Fleming, esta película musical es un clásico del cine familiar. Basada en la novela de L. Frank Baum, sigue la aventura de una joven llamada Dorothy y su perro Toto, quienes son transportados a la tierra de Oz, donde encuentran amigos peculiares y luchan contra la malvada Bruja del Oeste en su búsqueda para regresar a casa.' , imagen :'assets/elmagodeoz.jpeg'},
      { id: 10, name: 'Desayuno en Tiffany(1961)', descripcion: 'Dirigida por Blake Edwards, esta película es una comedia romántica icónica. Protagonizada por Audrey Hepburn como la encantadora Holly Golightly, la historia sigue sus extravagantes aventuras en Nueva York mientras busca un esposo rico y se enamora de su vecino escritor.', imagen :'assets/desayunoen.jpeg'},
      { id: 11, name: 'El Gran Dictador (1940)', descripcion: 'Dirigida y protagonizada por Charlie Chaplin, esta película es una sátira política y una condena del régimen nazi de Adolf Hitler. Chaplin interpreta a dos personajes: un barbero judío que es confundido con el dictador de Tomania y una caricatura de Hitler llamada Adenoid Hynkel.', imagen :'assets/elgrandictador.jpeg'},
      { id: 12, name: 'Lawrence de Arabia (1962)', descripcion: ' Dirigida por David Lean, esta película épica es una biografía dramatizada del oficial británico T.E. Lawrence durante la Primera Guerra Mundial. Protagonizada por Peter O"Toole en el papel principal, sigue la extraordinaria vida y aventuras de Lawrence en el Medio Oriente', imagen :'assets/lawrence.jpeg'},
      { id: 13, name: 'La Lista de Schindler (1993)', descripcion: 'Dirigida por Steven Spielberg, esta película histórica es un drama basado en hechos reales sobre Oskar Schindler, un empresario alemán que salvó a más de mil judíos durante el Holocausto. La película retrata su heroica y conmovedora historia de coraje y humanidad en medio del horror del nazismo.', imagen :'assets/lalista.jpeg'}
        ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
