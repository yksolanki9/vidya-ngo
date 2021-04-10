/* <Grid container className={classes.gridContainer} align="center">
          <Grid item md={3}>
          <FontAwesomeIcon icon="child" size="2x"/>
         
  <CountUp start={isActive ? 0 : 12000} end={12000} duration={5} onEnd= {()=> setIsActive(false)} >
  
      {({ countUpRef, start }) => (
       
          <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
          </VisibilitySensor>
      )}
  </CountUp>
   
            <Typography variant="h6"  className={classes.statsGridItem}>
              Children
            </Typography>
          </Grid>
          <Grid item md={3} >
          <FontAwesomeIcon icon="graduation-cap" size="2x"/>
            <Typography variant="h6" className={classes.statsGridItem}>
              Youth
            </Typography>
          </Grid>
          <Grid item md={3} >
          <FontAwesomeIcon icon="female" size="2x"/>
            <Typography variant="h6"  className={classes.statsGridItem}>
              Women
            </Typography>
          </Grid>
          <Grid item md={3}>
          <FontAwesomeIcon icon="passport" size="2x"/>
            <Typography variant="h6"  className={classes.statsGridItem}>
              Projects
            </Typography>
          </Grid>
        </Grid> */