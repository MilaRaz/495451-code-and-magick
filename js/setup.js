'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_COUNT = 3;
var wizards = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var generateWizards = function () {
  for (var i = 0; i <= WIZARD_COUNT; i++) {
    wizards [i] =
    {
      name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COAT_COLOR[getRandomNumber(0, WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[getRandomNumber(0, WIZARD_EYES_COLOR.length)]
    };
  }
};
generateWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderAllWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
renderAllWizards();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
if (userNameInput !== document.activeElement) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

var btnSetupSubmit = setup.querySelector('.setup-submit');
btnSetupSubmit.addEventListener('click', function () {
  closePopup();
});

btnSetupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var setupcoatColor = function (evt) {
  evt.currentTarget.style.fill = WIZARD_COAT_COLOR[getRandomNumber(0, WIZARD_COAT_COLOR.length)];
};

var setupeyesColor = function (evt) {
  evt.currentTarget.style.fill = WIZARD_EYES_COLOR[getRandomNumber(0, WIZARD_EYES_COLOR.length)];
};

var setupfireballColor = function (evt) {
  evt.currentTarget.style.background = WIZARD_FIREBALL_COLOR[getRandomNumber(0, WIZARD_FIREBALL_COLOR.length)];
};

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
wizardCoat.addEventListener('click', function (evt) {
  setupcoatColor(evt);
});

var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function (evt) {
  setupeyesColor(evt);
});

var wizardFireball = document.querySelector('.setup-fireball-wrap');
wizardFireball.addEventListener('click', function (evt) {
  setupfireballColor(evt);
});

