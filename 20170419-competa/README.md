Competa presentation on Tooling
===============================
by Bjørn Wikkeling <bjorn@wikkeling.com>


Contents of this presentation:
------------------------------

/api  
/cms  
/doc  
/presentation  
/swagger-editor  

/api
----
This is the API nodejs application. Simply install the dependencies using npm or yarn.
[More info about Yarn in the `doc` folder ](./doc/yarn.md)

```bash
$ yarn
$ yarn start
```

OR
```bash
$ npm install
$ npm start
```

Now you'll be able to use the API server on [localhost:3000](http://localhost:3000)

/cms
----
The CMS application based on the npm package [admin-on-rest](https://marmelab.com/admin-on-rest/).
Install dependencies using npm or yarn.

/doc
----

`20170419-presentation.pdf`  
The presentation slides

`api.paw`  
The paw file that can be used with the [http://paw.cloud](Paw app)

`swagger.yaml`  
The Swagger file that can be used with the swagger editor (see below) or in the
online swagger editor on [http://editor.swagger.io](swagger.io)

`yarn.md`  
Explanation of yarn, the alternative npm client.

/swagger-editor
---------------
The swagger editor directly clone from the [https://github.com/swagger-api/swagger-editor](github repository).
See the [./swagger-editor/README.md](README.md) for more info about the editor

