# 1 - Criar o boilerplate

```batch
npx create-react-app boilerplate-esri-javascript-api-react
```

# 2 - Deletar arquivos que não serão utilizados no boilerplate

- src/logo.svg
- src/setupTest.js
- src/reportWebVitals.js
- src/index.css
- src/App.test.js

- No arquivo index.js atualizar para:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
```

- No arquivo App.js atualizar para:

```javascript
import './App.css';

function App() {
	return (
		<div>
			<h1>Esri JavaScript API React.js</h1>
		</div>
	);
}

export default App;
```

- No arquivo App.css atualizar para:

```css
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
```

# 3 - Instalar bibliotecas utilizadas no boilerplate

`* - Instalar o esri-loader`

```batch
yarn add esri-loader
```

# 4 - Criar as pastas necessárias para o projeto

src/components
src/contexts

# 5 - Instalar bibliotecas utilizadas no projeto

`* - Instalar o styled-components`

```batch
yarn add styled-components
```

# 6 - Criar o componente BaseMap

src/components/BaseMap
src/components/BaseMap/index.js
src/components/BaseMap/styles.js

# 7 - Criar o contexto para map e view

src/contexts/MapView
src/contexts/MapView/index.js

# 8 - Criar o componente ZoomWidget

src/components/ZoomWidget
src/components/ZoomWidget/index.js
src/components/ZoomWidget/styles.js
