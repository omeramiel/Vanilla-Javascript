const PageState = function () {
    let currentState = new homeState(this);
    this.init = function () {
        this.change(new homeState);
    }

    this.change = function (state) {
        this.currentState = state;
    }
};

const homeState = function (page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    `;
};

const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
};

const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" id="phone" placeholder="Phone Number">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea type="text" class="form-control" id="message" rows="5" placeholder="Your Message..."></textarea>
             </div>
            <input type="submit" value="Submit" class="btn btn-primary btn-block">
        </form>
    `;
};

const page = new PageState();
page.init();


document.getElementById('home').addEventListener('click', (e) => page.change(new homeState));
document.getElementById('about').addEventListener('click',  (e) => page.change(new aboutState));
document.getElementById('contact').addEventListener('click',  (e) => page.change(new contactState));

