# Contributing to StreamyFin

Thank you for considering contributing to StreamyFin! This guide will help you get started with contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for all contributors. Please review our Code of Conduct before participating:

- **Be respectful** and inclusive of all contributors
- **Be constructive** in feedback and discussions
- **Help others** learn and grow
- **Report** inappropriate behavior to maintainers

## Ways to Contribute

### Code Contributions

**Bug Fixes:**
- Fix reported issues
- Improve error handling
- Optimize performance
- Update dependencies

**Feature Development:**
- Implement new features
- Enhance existing functionality
- Add platform-specific improvements
- Develop new plugins

**Documentation:**
- Improve existing documentation
- Add code examples
- Create tutorials and guides
- Translate content

### Non-Code Contributions

**Testing:**
- Report bugs and issues
- Test beta releases
- Verify fixes on different devices
- Performance testing

**Design:**
- UI/UX improvements
- Icon and graphic design
- Accessibility enhancements
- User experience research

**Community:**
- Help answer questions
- Moderate discussions
- Organize events
- Create content

## Getting Started

### 1. Set Up Development Environment

Follow the [Development Setup Guide](setup.md) to configure your local environment:

```bash
# Clone the repository
git clone https://github.com/streamyfin/streamyfin.git
cd streamyfin

# Install dependencies
npm install

# Start development server
npm start
```

### 2. Find an Issue to Work On

**Good First Issues:**
- Look for issues labeled `good-first-issue`
- Start with documentation improvements
- Fix typos or minor bugs
- Improve error messages

**Issue Labels:**
- `bug` - Something isn't working
- `feature` - New feature request
- `documentation` - Documentation improvements
- `help-wanted` - Extra attention needed
- `priority-high` - Important issues

### 3. Create Your Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

## Development Guidelines

### Code Standards

**TypeScript:**
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid using `any` type
- Add JSDoc comments for complex functions

**Code Style:**
- Use Prettier for formatting
- Follow ESLint rules
- Use meaningful variable names
- Keep functions small and focused

**Example:**
```typescript
interface MediaItem {
  id: string;
  title: string;
  type: 'movie' | 'episode' | 'music';
  duration?: number;
}

/**
 * Formats duration in seconds to human-readable string
 * @param seconds Duration in seconds
 * @returns Formatted string (e.g., "2h 15m")
 */
const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};
```

### Testing Requirements

**Unit Tests:**
```typescript
// __tests__/utils.test.ts
import { formatDuration } from '../src/utils';

describe('formatDuration', () => {
  it('formats hours and minutes', () => {
    expect(formatDuration(8100)).toBe('2h 15m');
  });
  
  it('formats minutes only', () => {
    expect(formatDuration(900)).toBe('15m');
  });
});
```

**Component Tests:**
```typescript
// __tests__/components/MediaCard.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MediaCard from '../src/components/MediaCard';

describe('MediaCard', () => {
  const mockItem = {
    id: '1',
    title: 'Test Movie',
    type: 'movie' as const,
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <MediaCard item={mockItem} onPress={() => {}} />
    );
    
    expect(getByText('Test Movie')).toBeTruthy();
  });
});
```

### Commit Guidelines

**Commit Message Format:**
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `chore`: Build process or tool changes

**Examples:**
```bash
feat(player): add playback speed control

fix(auth): resolve login timeout issue

docs(api): update authentication examples

style(components): improve button spacing

refactor(services): simplify API error handling

test(utils): add formatDuration tests

chore(deps): update React Native to 0.72
```

### Pull Request Process

**Before Submitting:**
1. **Run Tests:**
   ```bash
   npm test
   npm run lint
   npm run type-check
   ```

2. **Update Documentation:**
   - Update relevant documentation
   - Add or update code comments
   - Include usage examples

3. **Test Your Changes:**
   - Test on both iOS and Android
   - Test on different device sizes
   - Verify backwards compatibility

**Pull Request Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Breaking change

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Tested on iOS
- [ ] Tested on Android

## Screenshots (if applicable)
Before/after screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Review Process

### Code Review Guidelines

**For Contributors:**
- Be open to feedback
- Respond promptly to review comments
- Ask questions if feedback is unclear
- Make requested changes promptly

**For Reviewers:**
- Be constructive and respectful
- Explain the reasoning behind suggestions
- Approve when ready, request changes when needed
- Focus on code quality and project goals

### Review Criteria

**Code Quality:**
- Follows project coding standards
- Well-structured and readable
- Properly tested
- No obvious bugs or issues

**Functionality:**
- Works as intended
- Doesn't break existing features
- Handles edge cases appropriately
- Good user experience

**Documentation:**
- Code is well-commented
- Documentation is updated
- Examples are provided
- API changes are documented

## Special Contribution Areas

### Internationalization (i18n)

**Adding New Languages:**
```typescript
// src/locales/es.ts
export default {
  common: {
    ok: 'OK',
    cancel: 'Cancelar',
    loading: 'Cargando...',
  },
  player: {
    play: 'Reproducir',
    pause: 'Pausar',
    stop: 'Detener',
  },
};
```

**Translation Guidelines:**
- Use native speakers when possible
- Maintain consistent terminology
- Consider cultural context
- Test with different text lengths

### Accessibility

**Accessibility Requirements:**
- Add accessibility labels
- Support screen readers
- Ensure proper contrast ratios
- Test with accessibility tools

```typescript
<TouchableOpacity
  accessibilityLabel="Play movie"
  accessibilityHint="Starts playback of the selected movie"
  accessibilityRole="button"
>
  <PlayIcon />
</TouchableOpacity>
```

### Plugin Development

**Creating Plugins:**
1. Use the Plugin SDK
2. Follow plugin guidelines
3. Document plugin APIs
4. Provide usage examples
5. Test across platforms

**Plugin Review Process:**
- Security review required
- Performance testing
- Documentation review
- Community feedback

## Community and Communication

### Communication Channels

**GitHub:**
- Issues for bug reports
- Discussions for questions
- Pull requests for code changes
- Wiki for additional documentation

**Discord:**
- Real-time chat
- Developer channels
- Community support
- Project announcements

**Social Media:**
- Twitter for updates
- Reddit for community discussions
- YouTube for tutorials

### Community Guidelines

**Be Helpful:**
- Answer questions when you can
- Share knowledge and resources
- Welcome new contributors
- Provide constructive feedback

**Stay Engaged:**
- Participate in discussions
- Attend community events
- Share your projects
- Give feedback on proposals

## Recognition

### Contributors

All contributors are recognized in:
- Project README
- Release notes
- Annual contributor highlights
- Special badges and mentions

### Maintainer Path

**Becoming a Maintainer:**
1. Consistent, quality contributions
2. Deep project knowledge
3. Community involvement
4. Leadership and mentoring
5. Invitation from existing maintainers

**Maintainer Responsibilities:**
- Code review and merging
- Issue triage and labeling
- Release management
- Community moderation
- Project direction decisions

## Getting Help

### Need Assistance?

**Technical Questions:**
- Check existing documentation
- Search GitHub issues
- Ask in Discord #development
- Create a GitHub discussion

**Contribution Questions:**
- Review this guide
- Ask in Discord #contributors
- Reach out to maintainers
- Join contributor office hours

### Resources

**Documentation:**
- [Development Setup](setup.md)
- [Building Guide](building.md)
- [API Documentation](https://api.streamyfin.app)

**Tools:**
- [React Native Docs](https://reactnative.dev)
- [TypeScript Guide](https://typescriptlang.org)
- [Testing Library](https://testing-library.com)

## License

By contributing to StreamyFin, you agree that your contributions will be licensed under the same license as the project. Make sure you have the right to license your contributions and that they don't violate any third-party rights.

---

Thank you for contributing to StreamyFin! Your efforts help make the project better for everyone. 🎉