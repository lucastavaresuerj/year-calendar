export default `#graphql
  query MyCalendarsPage($pagination: InpPagination) {
    cardPreview(pagination: $pagination) {
      nextToken
      items {
        user
        year
        name
        index
        title {
          name
          config {
            aling
            fontWeight
            size
            style
            textColor
          }
        }
        months {
          weekDays {
            backgroundColor
            fontWeight
            size
            textColor
            textStyle
          }
          header {
            monthName {
              aling
              fontWeight
              size
              style
              textColor
            }
            number {
              showNumber
              side
            }
            backgroundColor
            rounded
            space
          }
          monthDays {
            config {
              color
            }
            date
            holidays {
              config {
                backgroundColor
                textColor
              }
              description
            }
          }
        }
      }
    }
  }
`;
