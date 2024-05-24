import DateClicking from '@bwobbones/fullcalendar5-rightclick'
import interactionPlugin from '@fullcalendar/interaction'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const sapesInteractionPlugin = new Proxy(interactionPlugin, {
  get(target, prop, receiver) {
    if (prop === 'componentInteractions') {
      target.componentInteractions[0] = DateClicking
    }
    return Reflect.get(...arguments)
  }
});



window.SapesCalendar = (element) => {
  return new Calendar(element, {
    plugins: [
      sapesInteractionPlugin,
      dayGridPlugin
    ],
    initialView: 'dayGridMonth'
  })
}