# Example of a node script

To run a node script, type this in your terminal:

```sh
node script.js
```

Where `script.js` is Node.js javascript file.

In this repo, there's a `script.js` file that will iterate through items in
`data.json` and attempt to fetch an image logo from clearbit.com based on the
`website` of each item. Before you run the script, you'll have to install the
`node-fetch`dependency:

```sh
npm install
```

For a lengthier introduction to node programs/scripts, here's a good resource:
https://www.digitalocean.com/community/tutorials/how-to-write-and-run-your-first-program-in-node-js
