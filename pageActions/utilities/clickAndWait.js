const DEFAULT_OPTIONS = { waitUntil: 'networkidle2' };

module.exports = async function clickAndWait(page, elem, options = DEFAULT_OPTIONS) {
  await Promise.all([
    page.waitForNavigation(options),
    page.click(elem),
  ]);
};
