const nav = {
    template: `
    <img src="../img/atom.png" alt="" class="atom" onclick="window.scrollTo(0,0)">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="../home/index.html"><img src="../img/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        關於本系
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../about/history.html">系所歷史沿革</a></li>
                        <li><a class="dropdown-item" href="../about/location.html">系館地理位置</a></li>
                        <li><a class="dropdown-item" href="../about/contact.html">系所聯絡資訊</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        教學研究
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../teaching-and-researching/teachers.html">專任教師列表</a></li>
                        <li><a class="dropdown-item" href="../teaching-and-researching/lab.html">特色研究實驗室</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        學生專區
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../student/lesson-map.html">必選修 / 課程地圖</a></li>
                        <li><a class="dropdown-item" href="../student/student-association-and-class.html">系學會與班級專欄</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        新生 / 系友
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../freshman-and-alumni/recruit.html">招生資訊</a></li>
                        <li><a class="dropdown-item" href="../freshman-and-alumni/outstading-alumni.html">傑出系友</a></li>
                        <li><a class="dropdown-item" href="../freshman-and-alumni/alumni.html">系友會資訊</a></li>
                    </ul>
                </li>

            </ul>
            <form class="d-flex form-search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
    `
};

exports = nav