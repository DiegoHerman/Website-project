import path from "node:path";
import htmlPlugin from "html-webpack-plugin";

export default{
    mode:"development",
    entry:"./src/homepage.js",

    devtool:"eval-source-map",
    devServer:{
        watchFiles: ["./src/lunagal.html"],
    },

    output: {
        filename:"main.js",
        path: path.resolve(import.meta.dirname,".dist"),
        clean: true,
    },

    plugins: [
        new htmlPlugin({template: "./src/lunagal.html"},)
    ],

    module: { 
        rules: [
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"],
            },
        ],
    },
}