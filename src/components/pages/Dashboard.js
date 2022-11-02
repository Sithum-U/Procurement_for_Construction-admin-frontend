import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Dashboard = () => {
	return(
		<div className="container-scroller">
        
        <Header/>
        
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_settings-panel.html */}
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close ti-close" />
            <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
              </li>
            </ul>
            <div className="tab-content" id="setting-content">
              <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                <div className="add-items d-flex px-3 mb-0">
                  <form className="form w-100">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                      <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                    </div>
                  </form>
                </div>
                <div className="list-wrapper px-3">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Prepare for presentation
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Project review
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                  </ul>
                </div>
                <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                  <p className="text-gray mb-0">The total number of sessions</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              {/* To do section tab ends */}
              <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile"><img src="assets/images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
              {/* chat tab ends */}
            </div>
          </div>
          {/* partial */}
          {/* partial:partials/_sidebar.html */}
          <Sidebar/>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="statistics-details d-flex align-items-center justify-content-between">
                              <div>
                                <p className="statistics-title">Bounce Rate</p>
                                <h3 className="rate-percentage">32.53%</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>-0.5%</span></p>
                              </div>
                              <div>
                                <p className="statistics-title">Avg Costs</p>
                                <h3 className="rate-percentage">7,682</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-up" /><span>+0.1%</span></p>
                              </div>
                              <div>
                                <p className="statistics-title">Purchases</p>
                                <h3 className="rate-percentage">68.8</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>68.8</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">Vendors</p>
                                <h3 className="rate-percentage">316</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-down" /><span>+0.8%</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">New Sessions</p>
                                <h3 className="rate-percentage">68.8</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>68.8</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">Avg. Time</p>
                                <h3 className="rate-percentage">2m:35s</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-down" /><span>+0.8%</span></p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="row">
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Performance Line Chart</h4>
                                        <h5 className="card-subtitle card-subtitle-dash">Lorem Ipsum is simply dummy text of the printing</h5>
                                      </div>
                                      <div id="performance-line-legend" />
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                      <canvas id="performaneLine" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card bg-primary card-rounded">
                                  <div className="card-body pb-0">
                                    <h4 className="card-title card-title-dash text-white mb-4">Materials Summary</h4>
                                    <div className="row">
                                      <div className="col-sm-4">
                                        <p className="status-summary-ight-white mb-1">Closed Value</p>
                                        <h2 className="text-info">357</h2>
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="status-summary-chart-wrapper pb-4">
                                          <canvas id="status-summary" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                          <div className="circle-progress-width">
                                            <div id="totalVisitors" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Total Purchases</p>
                                            <h4 className="mb-0 fw-bold">76.80%</h4>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="circle-progress-width">
                                            <div id="visitperday" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Visits for materials per day</p>
                                            <h4 className="mb-0 fw-bold">9065</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <Footer/>
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>)
}


export default Dashboard;