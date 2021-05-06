async function requestExternalImage(imageUrl) {
  const res = await fetch('fetch_external_image', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ imageUrl })
  })
  if (!(res.status < 400)) {
    console.error(res.status + ' : ' + await res.text())
    throw new Error('failed to fetch image from url: ' + imageUrl)
  }

  let blob
  try {
    blob = await res.blob()
    return await faceapi.bufferToImage(blob)
  } catch (e) {
    console.error('received blob:', blob)
    console.error('error:', e)
    throw new Error('failed to load image from url: ' + imageUrl)
  }
}

function renderNavBar(navbarId, exampleUri) {
  const examples = [
    {
      uri: 'face_landmark_detection',
      name: 'Face Detection'
    },
    {
      uri: 'webcam_face_landmark_detection',
      name: 'Webcam Face Detection'
    },
    {
      uri: 'face_expression_recognition',
      name: 'Face Expression Recognition'
    },
    {
      uri: 'webcam_face_expression_recognition',
      name: 'Webcam Face Expression Recognition'
    },
    {
      uri: 'age_and_gender_recognition',
      name: 'Age and Gender Recognition'
    },
    {
      uri: 'webcam_age_and_gender_recognition',
      name: 'Webcam Age and Gender Recognition'
    },
    {
      uri: 'face_extraction',
      name: 'Face Extraction'
    },
    {
      uri: 'video_face_tracking',
      name: 'Video Face Tracking'
    },
    {
      uri: 'webcamBodyPix',
      name: 'Webcam BodyPix'
    },
    {
      uri: 'webcamPoseNet',
      name: 'Webcam PoseNet'
    },
    {
      uri: 'WebcamCocoSSDDetector',
      name: 'Webcam CocoSSD Detector'
    },
    {
      uri: 'WebcamYOLODetector',
      name: 'Webcam YOLO Detector'
    }
  ]

  const navbar = $(navbarId).get(0)
  const pageContainer = $('.page-container').get(0)
  pageContainer.style.background = "cyan"

  const header = document.createElement('h3')
  header.innerHTML = examples.find(ex => ex.uri === exampleUri).name
  pageContainer.insertBefore(header, pageContainer.children[0])

  const menuContent = document.createElement('ul')
  menuContent.id = 'slide-out'
  menuContent.classList.add('side-nav', 'fixed')
  navbar.appendChild(menuContent)

  const menuButton = document.createElement('a')
  menuButton.href='#'
  menuButton.classList.add('button-collapse', 'show-on-large')
  menuButton.setAttribute('data-activates', 'slide-out')
  const menuButtonIcon = document.createElement('img')
  menuButtonIcon.src = 'menu_icon.png'
  menuButton.appendChild(menuButtonIcon)
  navbar.appendChild(menuButton)
  menuContent.style.background = "black"

  const li = document.createElement('li')
  const Logo = document.createElement('a')
  Logo.classList.add('waves-effect', 'waves-light', 'side-by-side')
  Logo.id = 'link'
  Logo.href = '#'
  Logo.style.color = 'white'
  Logo.style.background = 'black'
  Logo.style.padding = '10px'
  const h5 = document.createElement('h5')
  h5.innerHTML = 'Detecting objects'
  Logo.appendChild(h5)
  const LogoLinkIcon = document.createElement('img')
  // LogoLinkIcon.src = 'artificial-intelligence-logo.png'
  Logo.appendChild(LogoLinkIcon)
  li.appendChild(Logo)
  menuContent.appendChild(li)

  examples
    .forEach(ex => {
      const li = document.createElement('li')
      li.style.color = 'white'
      li.style.background = 'grey'
      if (ex.uri === exampleUri) {
        li.style.background='lightgrey'
      }
      const a = document.createElement('a')
      a.classList.add('waves-effect', 'waves-light', 'pad-sides-sm')
      a.href = ex.uri
      const span = document.createElement('span')
      span.innerHTML = ex.name
      span.style.whiteSpace = 'nowrap'
      a.appendChild(span)
      li.appendChild(a)
      menuContent.appendChild(li)
    })

  $('.button-collapse').sideNav({
    menuWidth: 260
  })
}

function renderSelectList(selectListId, onChange, initialValue, renderChildren) {
  const select = document.createElement('select')
  $(selectListId).get(0).appendChild(select)
  renderChildren(select)
  $(select).val(initialValue)
  $(select).on('change', (e) => onChange(e.target.value))
  $(select).material_select()
}

function renderOption(parent, text, value) {
  const option = document.createElement('option')
  option.innerHTML = text
  option.value = value
  parent.appendChild(option)
}