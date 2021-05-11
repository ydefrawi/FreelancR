const router = require('express').Router();
const { Project, Bid, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectsData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'freelancer'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectsData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      name: req.session.name,
      logged_in: req.session.logged_in,
      freelancer: req.session.freelancer
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name','freelancer']
        },
        {
          model: Bid,
          include: [User]
        }
      ]
    });

    const project = projectData.get({ plain: true });

    console.log("one project:::" + project);

    res.render('project', { project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// // GET all bids for project_id in Project
// router.get('/addBid/:project_id', async (req, res) => {
//   try {
//     const bidData = await Bid.findAll({
//       where: [
//         {
//           project_id: req.params.project_id
//         }
//       ],
//       include: [
//         {
//           model: User,
//           attributes: [
//             'name'
//           ]
//         }
//       ]
//     });
//     const bid = bidData.get({ plain: true });
//     console.log("BID:::" + bid);
//     res.render('bid', { bid, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      freelancer:req.session.freelancer,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user-profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('user-profile', {
      ...user,
      freelancer:req.session.freelancer,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/addBid', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('addBid', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/addBid/:id', withAuth, async (req, res) => {
  try {
    const bidFormData = await Project.findByPk(req.params.id, {
    });
    const bidForm = bidFormData.get({ plain: true });
    res.render('addBid', { bidForm,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
