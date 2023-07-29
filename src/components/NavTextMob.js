const NavTextMob = (props) => {
  return (
    <div className="nav-text-mob sm:block md:hidden lg:hidden -right-20 top-0 font-extrabold">
      {props.info}
    </div>
  );
};
export default NavTextMob;
