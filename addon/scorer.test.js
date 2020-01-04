const {Worker} = require("worker_threads")
const scorer = new Worker("./addon/scorer.js", {"workerData": "hello"})

test('scans', done => {
  scorer.on("message", val => {
    expect(val).toBe(1)
    scorer.terminate().then(_ =>
      done()
    )
  })
  scorer.postMessage(JSON.stringify(["scan", "hello"]))
})
