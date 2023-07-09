interface props{
    SetPageNumber: (id:number) => void;
}
export const Sidebar = ({SetPageNumber}:props) => {
  return (
    <div className="sidebar-parent">
      <div className="logo">
        <h4>Nandkishor Sharma</h4>
      </div>
      <div style={{ height: "90vh", overflowY: "scroll" }}>
        <div className="list-group list-group-flush sidebar-list">
          <a className="list-group-item "  onClick={() => SetPageNumber(0)}>
            <i className="fas fa-sliders-h p-2"></i>
            User
          </a>
          <a className="list-group-item "  onClick={() => SetPageNumber(1)}>
            <i className="fas fa-sliders-h p-2"></i>
            Org
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>

          <a className="list-group-item " href="dashboard">
            <i className="fas fa-sliders-h p-2"></i>
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};
