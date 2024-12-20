import { Injectable } from '@angular/core';
import { Event } from "src/app/models/event"

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public events: Event[] = [
    {
      id: 1,
      img: "https://hotelarclarambla.com/agenda/wp-content/uploads/2023/05/hotel-arc-rambla-barcelona-blog-tourism-best-venues-music-direct-harlem-jazz-club.webp",
      title: "Música en Vivo",
      description: "Disfruta de una velada llena de música en vivo con artistas locales. Una noche perfecta para relajarte y disfrutar del buen ambiente.",
      date: "10/01/2025",
      time: "20:30"
    },
    {
      id: 2,
      img: "https://www.espectaculoscortina.com/img/sections/alquiler_karaoke_barcelona.jpg",
      title: "Fiesta de Karaoke",
      description: "Saca al cantante que llevas dentro y únete a nuestra fiesta de karaoke. Una noche llena de diversión y música.",
      date: "15/02/2025",
      time: "23:00"
    },
    {
      id: 3,
      img: "https://www.entradas.com/obj/media/ES-eventim/galery/kuenstler/l/La_Hora_Media_El_Club_de_la_Comedia_2.jpg",
      title: "Comedia en Vivo",
      description: "Disfruta y ríete a carcajadas con los mejores comediantes locales. ¡Una velada llena de humor y risas!",
      date: "12/03/2025",
      time: "21:00"
    },
    {
      id: 4,
      img: "https://mana75.es/wp-content/uploads/2023/10/Somnia-cena-con-espectaculo-de-magia.jpg",
      title: "Espectáculo de Magia",
      description: "Disfruta de una cena deliciosa mientras un mago profesional te asombra con sus trucos. Una noche única llena de magia y sorpresas.",
      date: "25/04/2025",
      time: "20:30"
    },
  ]

  constructor() { }

  public getEvents(): Event[] {
    return this.events;
  }

  public addEvent(newEvent: Event): void {
    const newId = this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1;
    newEvent.id = newId;
    this.events.push(newEvent);
  }

  public putEvent(editEvent: Event): void {
    const index = this.events.findIndex(event => event.id === editEvent.id);
    if (index !== -1) {
      this.events[index] = { ...editEvent };
    } else {
      console.log("Evento no encontrado para editar");
    }
  }

  public delete(event: Event): void {
    const index = this.events.indexOf(event);
    if (index !== -1) {
      this.events.splice(index, 1);
    } else {
      console.log("Error al eliminar el evento");
    }
  }
}
