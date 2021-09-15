
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class Scroll {
  scrollTo(id: string): void {
    if (id) {
        const elementList = document.querySelectorAll('#' + id);
        const element = elementList[0] as HTMLElement;
    
        let elementPosition = element.getBoundingClientRect().top;
        window.scrollTo({
            top: elementPosition - 100,
            behavior: "smooth"
       });
    }
  }
}
