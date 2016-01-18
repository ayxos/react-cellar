// Type definition for redux-localstorage v0.4.0

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-localstorage' {

  type ReduxLocalStoragePath = void | string | Array<String>;

  interface ReduxLocalStorageConfig {
    key: String,
    slicer: (paths: any) => (state: any) => any,
    serialize: (subset: any) =>  string,
    deserialize: (serializedData: string) => any,
    merge: (initialState: any, persistedState: any) => any
  }

  export default function persistState(paths: ReduxLocalStoragePath, config: ReduxLocalStorageConfig);
}