declare module '*.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.sass' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module 'redux-persist/lib/storage';

declare module 'redux-persist/es/persistReducer';

declare module 'redux-persist/integration/react';

declare module 'redux-persist/es/persistStore';