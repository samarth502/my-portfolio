const NavText = (props) => {
  return (
    <div className="nav-text sm:hidden md:block lg:block -right-20 -bottom-36 font-extrabold">
      {props.info}
    </div>
  );
};
export default NavText;
