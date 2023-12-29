export default function Navbar() {
  return (
    <div className="navbar bg-white px-5">
      <div className="navbar-start text-black">
        <a className="text-xl font-semibold">Mumtaz BookStore</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end gap-3">
        <a className="btn bg-primary text-white">Login</a>
        <p className="text-black text-sm fs-6">OR</p>
        <a className="btn bg-success text-white">Register</a>
      </div>
    </div>
  );
}
