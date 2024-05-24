# sapes-fullcalendar

[Scaricare Node v20](https://nodejs.org/)

Da terminale eseguire in root della cartella

```bash
npm ci
```

Eseguire la compilazione
```bash
npm run build
```

Nella cartella `dist/` aprire il file `index.html` con un browser

Il file compilato è `dist/sapes-calendar.js`

Di seguito un esempio di come invocare il metodo in pagina
```javascript
        const container = document.getElementById('calendar')
        const calendarInstance = window.SapesCalendar(container)
        calendarInstance.render()
```