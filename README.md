# easy_ts_project
How to create an easy project to try some code in TypeScript. Like in ABAP a "Z-Report" :-)

## Steps to reproduce
1. Create the package.json
    ```shell
    npm init
    ```
2. Create the required development dependency
    ```shell
    npm i -D typescript ts-node 
    ```
3. Create the TypeScript config file tsconfig.json
    ```shell 
    npx tsc --init
    ```
4. Add Script to package.json: e.g. "start"
5. Run the project
    ```shell 
    npm run start
    ```     