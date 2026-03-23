import { getByText, getByRole } from '@testing-library/dom';
import { html } from 'lit-html';

// Sample HTML structure for the tests
const sampleHTML = html`\n<header>\n  <h1>Test Header</h1>\n</header>\n<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>\n<main>\n  <button id="myButton">Click me</button>\n  <p>Main content area</p>\n</main>\n<footer>\n  <p>Footer Information</p>\n</footer>\n`;

describe('HTML Structure Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = sampleHTML;
  });

  test('header is present and has correct structure', () => {
    const header = getByRole(document.body, 'banner');
    expect(header).toBeTruthy();
    expect(getByText(header, 'Test Header')).toBeInTheDocument();
  });

  test('navigation menu is present with correct links', () => {
    const nav = getByRole(document.body, 'navigation');
    expect(nav).toBeTruthy();
    const links = getByRole(nav, 'list');
    expect(getByText(links, 'Home')).toBeInTheDocument();
    expect(getByText(links, 'About')).toBeInTheDocument();
    expect(getByText(links, 'Contact')).toBeInTheDocument();
  });

  test('main content is present and functional', () => {
    const button = getByRole(document.body, 'button', { name: /click me/i });
    expect(button).toBeTruthy();
    expect(getByText(document.body, 'Main content area')).toBeInTheDocument();
  });

  test('footer is present and has correct information', () => {
    const footer = getByRole(document.body, 'contentinfo');
    expect(footer).toBeTruthy();
    expect(getByText(footer, 'Footer Information')).toBeInTheDocument();
  });
});
