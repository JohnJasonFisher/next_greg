export default function About() {
    return (
    <div className="About">
        <h1>About</h1>
        <ul>Environment: {process.env.NEXT_PUBLIC_ENV}</ul>
        <ul>Api Url: {process.env.NEXT_PUBLIC_API_URL}</ul>
    </div>
  )
}