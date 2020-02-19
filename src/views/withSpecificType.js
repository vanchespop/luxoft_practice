export const withSpecificType = (Chart, type) => {
  return {
    functional: true,
    name: 'WithSpecificType',
    render(h, context) {
      return h(
        Chart,
        {
          ...context.data,
          props: {
            type,
          }
        },
        context.children
      )
    },
  }
};
