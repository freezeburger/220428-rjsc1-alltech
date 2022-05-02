# ReactJS

# Web Application Metrics

* Time To First Paint :  2s
* TTI :  7s
* DOM Nodes : 5k | 15k | >15k
* FPS / REFRESH RATE : 30 à 60

> Certaine valeur seront affectées par les render des composant ReactJS

# JavaScript -  Modules

* Fichier chargé en tant que module.
* Expose du code par `export`
* Consome du code  `import`
* Est chargé une seule fois en mémoire.

# Principe SOLID

* S ingles Responsabilty 
* O pen/ Close
* L (iskov) : subsitution
* I interface Segregation
* D ependency Inversion

*Intreprétation*

* S :  Faire une seule tâche à la fois.
* O : Eviter les mutation depuis le code extérieur.
* L :  Mettre en place du couplage lâche (particulièrement pour les bibiothèque externes)
* I  :  Code qui se différencie naturellement (sémantiquement)
* D:  Exprimer des besoin.

# React Library

* Création de composant (dans un existant ou pas)
    * `Class Component` - Possède un mécanisme `state` et un mécanisme *licycle*
    * `Functional Component` - Doit utiliser les hooks `useState` et `useEffect` 
* Les hooks ne sont utilisables QUE dans les `Functional Component`

# React Structuration

> Différencier les composant par rôle dans l'application.

*  Base : Brique graphique simple configurable.
*  Feature: UX d'une d'une fonctionnalité.  ( lazy loading )
*  Container :fournint un context.
*  Layout : graphique de disposition dans l'écran.
*  View : composnant destiné aux routing ( et ou lazy loading )

# React Lazzy Loading

> BUT : Scénarise le chargement initial.
**ATTENTION** : aux `import dans le code`

**Verifier que le lazzy est techniquement fonctionnel**


# React Hooks

> Fonction qui permet de se raccrocher à une mécanique (logique particulière)
Mécanique determinée par le hook et sa provenance.

La convention de nommage **useMyHook** indique la potielle utilisation d'un hook natifs.

**Hooks Natifs**

* `useState` - Mécanique d'état de rendu des composant.
* `useEffect` - Mécanique de cycle de vie composant.
* `useContext` - Mécanique de context (partage de données).

* `useRef` - Mécanique de Refs. 
* `useMemo` - Mécanique de 
* `useReducer` - Mécanique de 
* `useCallback` - Mécanique de 

* `useImperativeHandle` - Mécanique de 
* `useLayoutEffect` - Mécanique de 
* `useDebugValue` - Mécanique de 

**Hooks Custom**

Encapusaltion du code pour refactorisation.

**Hooks Tiers**

* `useState` - Mécanique d'état de rendu des composant.
* `useEffect` - Mécanique de cycle de vie composant.