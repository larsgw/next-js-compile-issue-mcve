/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  function foo (arg) {
    var arg = arg.slice()
  }

  return <>
    <button onClick={() => foo([])}>Click to test</button>
  </>
}
