# Descrizione:

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30
secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i
numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
numeri da indovinare sono stati individuati.

## Bonus:

- Mostriamo il countdown dei 30 secondi in pagina.

- Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via
  prompt.

## Consigli del giorno:

- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
<hr>

## Scaletta

1. Prendo gli elementi dal dom
1. Metto in ascolto il bottone
1. Creo un variabile che inserisca dentro un array vuoto dei numeri randomici da
   1 a 10
1. Creo un timer di 30 secondi
1. **SE** scaduti i 30 secondi

- Applico la classe a i numeri per farli scomparire
- Fermo il timer

7. Creo un prompt che chiede all'utente che numeri ha scelto
1. Creo un ciclo per i prompt
1. **SE NON** la risposta dell'utente equivale a i numeri inseriti nell'array

- HA PERSO

10. **ALTRIMENTI** HA VINTO
