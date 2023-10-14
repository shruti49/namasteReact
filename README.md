# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement 
- File watching algo - written in c++
- Caching - Faster Builds 
- Image Optimization
- Minification of files
- Bundling
- Compressing
- Content Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unsused code
- Different dev & prod build

# 2 most important hooks
- useState()
- useEffect()
  

# Optimisations - Making code into smaller logical chunks/ Smaller applications within big application
- Dynamic Bundling
- Code Splitting
- Chunking
- Lazy Loading
- On demand Loading
- Dynamic Import  
  

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our global,centralised store
- Connect our store to our app
- Create slice (cartSlice)
- Dispatch actions on event handlers
- Invoking reducers
- Subscribing to store using selector 


# Testing
- Unit Testing -> Testing in isolation (Only one unit/ one component)
- Integration Testing -> Testing the integration of components
- End to End Testing


# React Testing Setup
- Install ReactTestingLibrary
- Install Jest
- Install Babel dependencies with Jest
- Configure babel.config.js
Parcel already use babel and has its config. Now Babel with interfare with Jest Babel
- Configure Parcel to disable default babel transpilation
- Install JSDOM library
- Install @babel/preset-react - to make JSX work in test cases
(Converts jsx code into HTML code)
- Install @testing-library/jest-dom

# JSDOM
- Testing environment which acts as a browser


# DUNDER
- Dunder methods are names that are preceded and succeeded by double underscores, hence the name dunder. 
- They are also called magic methods and can help override functionality for built-in functions for custom classes.

test(description,implementation)